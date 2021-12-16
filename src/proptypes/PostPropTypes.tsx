export type PostFieldsPropTypes = {
  titulo: string
  slug: string
  foto: {
    metadata: {
      tags: Array<string>
    }
    sys: {
      space: {
        sys: {
          type: string
          linkType: string
          id: string
        }
      }
      id: string
      type: string
      createdAt: string
      updatedAt: string
      environment: {
        sys: {
          id: string
          type: string
          linkType: string
        }
      }
      revision: number
      locale: string
    }
    fields: {
      title: string
      description: string
      file: {
        url: string
        details: {
          size: number
          image: {
            width: number
            height: number
          }
        }
        fileName: string
        contentType: string
      }
    }
  }
  data: string
  descricao: string
  conteudo: {
    data: any
    content: [
      {
        data: any
        content: [
          {
            data: any
            marks: Array<string>
            value?: string
            nodeType: string
          }
        ]
        nodeType: string
      }
    ]
    nodeType: string
  }
  ativo: boolean
  video: string
}

export type PostPropTypes = {
  metadata: {
    tags?: Array<string>
  }
  sys: {
    space: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    id: string
    type: string
    createdAt: string
    updatedAt: string
    environment: {
      sys: {
        id: string
        type: string
        linkType: string
      }
    }
    revision: number
    contentType: {
      sys: {
        type: string
        linkType: string
        id: string
      }
    }
    locale: string
  }
  fields: PostFieldsPropTypes
}
