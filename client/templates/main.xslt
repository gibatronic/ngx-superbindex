<?xml version="1.0" encoding="UTF-8" ?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" />

  <xsl:template match="/">
    <xsl:text disable-output-escaping="yes">&lt;!DOCTYPE html&gt;</xsl:text>

    <html>
      <head>
        <title>superbindex</title>

        <meta name="version" conent="{{version}}" />
        <meta name="viewport" conent="initial-scale=1, minimum-scale=1, shrink-to-fit=no, width=device-width" />

        <style><![CDATA[{{{style}}}]]></style>
      </head>
      <body>
        <script id="data" type="application/json">
          <xsl:text>[</xsl:text>
          <xsl:for-each select="list/*">
            <xsl:if test="position() != 1">
              <xsl:text>, </xsl:text>
            </xsl:if>
            <xsl:text>{</xsl:text>
            <xsl:text>"name": "</xsl:text>
            <xsl:value-of select="." />
            <xsl:text>", "type": "</xsl:text>
            <xsl:value-of select="name(.)" />
            <xsl:text>"</xsl:text>
            <xsl:text>}</xsl:text>
          </xsl:for-each>
          <xsl:text>]</xsl:text>
        </script>

        <script><![CDATA[{{{script}}}]]></script>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
