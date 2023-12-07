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
export type TiDownloadProps = typeof __propDef.props;
export type TiDownloadEvents = typeof __propDef.events;
export type TiDownloadSlots = typeof __propDef.slots;
export default class TiDownload extends SvelteComponentTyped<TiDownloadProps, TiDownloadEvents, TiDownloadSlots> {
}
export {};
