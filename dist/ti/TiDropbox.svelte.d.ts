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
export type TiDropboxProps = typeof __propDef.props;
export type TiDropboxEvents = typeof __propDef.events;
export type TiDropboxSlots = typeof __propDef.slots;
export default class TiDropbox extends SvelteComponentTyped<TiDropboxProps, TiDropboxEvents, TiDropboxSlots> {
}
export {};
