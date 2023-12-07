import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        [x: string]: any;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export type IoMdCodeDownloadProps = typeof __propDef.props;
export type IoMdCodeDownloadEvents = typeof __propDef.events;
export type IoMdCodeDownloadSlots = typeof __propDef.slots;
export default class IoMdCodeDownload extends SvelteComponentTyped<IoMdCodeDownloadProps, IoMdCodeDownloadEvents, IoMdCodeDownloadSlots> {
}
export {};
