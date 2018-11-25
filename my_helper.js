
class My extends Helper {

  // before/after hooks
  _before() {
    // remove if not used
  }

  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

  /**
   * Get JDBC like connection string from config file 
   * @return {Promise<string>} Connection string
   */
  async getConnectionString() {
    return this.config.connection; 
  }
}

module.exports = My;
