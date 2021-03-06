var path = require('path');
var platform = require('./platform');

const SONAR_SCANNER_CLI_VERSION = '3.0.3.778';
const SONAR_SCANNER_BASE_URL = 'https://sonarsource.bintray.com/Distribution/sonar-scanner-cli';
const SONAR_SCANNER_CLI_FOLDER = `sonar-scanner-${SONAR_SCANNER_CLI_VERSION}`;
const SONAR_SCANNER_CLI_WITH_JRE_FOLDER = `${SONAR_SCANNER_CLI_FOLDER}-${platform.name}`;
const SONAR_SCANNER_URL = `${SONAR_SCANNER_BASE_URL}/sonar-scanner-cli-${SONAR_SCANNER_CLI_VERSION}.zip`;
const SONAR_SCANNER_WITH_JRE_URL = `${SONAR_SCANNER_BASE_URL}/sonar-scanner-cli-${SONAR_SCANNER_CLI_VERSION}-${platform.name}.zip`;
const SONAR_SCANNER_CLI_INSTALL_PATH = path.join(__dirname, '..', 'dist');
const SONAR_EXECUTABLE = `sonar-scanner${platform.isWin ? '.bat' : ''}`;
const config = {
  sonarqubeScannerVersion: SONAR_SCANNER_CLI_VERSION,
  sonarqubeScannerUrl: SONAR_SCANNER_URL,
  sonarqubeScannerWithJreUrl: SONAR_SCANNER_WITH_JRE_URL,
  installPath: SONAR_SCANNER_CLI_INSTALL_PATH,
  somarqubeFolder: `${SONAR_SCANNER_CLI_INSTALL_PATH}/${SONAR_SCANNER_CLI_FOLDER}`,
  somarqubeWithJreFolder: `${SONAR_SCANNER_CLI_INSTALL_PATH}/${SONAR_SCANNER_CLI_WITH_JRE_FOLDER}`,
  sonarqubeScannerExecutable: path.join(
    SONAR_SCANNER_CLI_INSTALL_PATH,
    SONAR_SCANNER_CLI_FOLDER,
    'bin',
    SONAR_EXECUTABLE
  ),
  sonarqubeAccessTokenFile: 'sonar.login'
};

module.exports = config;