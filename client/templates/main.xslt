<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:output method="html" encoding="UTF-8" />

    <xsl:param name="color-base00" />
    <xsl:param name="color-base07" />
    <xsl:param name="color-base0D" />
    <xsl:param name="color-base0E" />

    <xsl:variable name="custom-colors">
        <xsl:if test="$color-base00 != ''">
            <xsl:text>--color-base00: </xsl:text>
            <xsl:value-of select="$color-base00" />
            <xsl:text>;</xsl:text>
        </xsl:if>

        <xsl:if test="$color-base07 != ''">
            <xsl:text>--color-base07: </xsl:text>
            <xsl:value-of select="$color-base07" />
            <xsl:text>;</xsl:text>
        </xsl:if>

        <xsl:if test="$color-base0D != ''">
            <xsl:text>--color-base0D: </xsl:text>
            <xsl:value-of select="$color-base0D" />
            <xsl:text>;</xsl:text>
        </xsl:if>

        <xsl:if test="$color-base0E != ''">
            <xsl:text>--color-base0E: </xsl:text>
            <xsl:value-of select="$color-base0E" />
            <xsl:text>;</xsl:text>
        </xsl:if>
    </xsl:variable>

    <xsl:template match="/">
        <xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html&gt;</xsl:text>

        <html>
            <head>
                <title>superbindex</title>

                <meta name="version" content="{{version}}" />
                <meta name="viewport" content="initial-scale=1, shrink-to-fit=no, viewport-fit=cover, width=device-width, height=device-height" />

                <style><![CDATA[{{style}}]]></style>

                <xsl:if test="normalize-space($custom-colors) != ''">
                    <style>
                        <xsl:text>:root {</xsl:text>
                            <xsl:value-of select="$custom-colors" />
                        <xsl:text>}</xsl:text>
                    </style>
                </xsl:if>
            </head>
            <body>
                <ol aria-label="asset list" is="asset-list" class="asset-list">
                    <xsl:for-each select="list/*">
                        <li is="asset-item">
                            <xsl:attribute name="class">
                                <xsl:text>asset-item asset-item--</xsl:text>
                                <xsl:value-of select="name(.)" />
                            </xsl:attribute>

                            <a is="asset-link">
                                <xsl:attribute name="aria-label">
                                    <xsl:value-of select="name(.)" />
                                    <xsl:text> </xsl:text>
                                    <xsl:value-of select="." />
                                </xsl:attribute>

                                <xsl:attribute name="href">
                                    <xsl:value-of select="." />
                                </xsl:attribute>

                                <xsl:attribute name="class">
                                    <xsl:text>asset-link asset-link--</xsl:text>
                                    <xsl:value-of select="name(.)" />
                                </xsl:attribute>

                                <xsl:value-of select="." />
                            </a>
                        </li>
                    </xsl:for-each>
                </ol>

                <script><![CDATA[{{script}}]]></script>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>