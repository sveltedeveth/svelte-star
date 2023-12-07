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
export type GiOpenFolderProps = typeof __propDef.props;
export type GiOpenFolderEvents = typeof __propDef.events;
export type GiOpenFolderSlots = typeof __propDef.slots;
export default class GiOpenFolder extends SvelteComponentTyped<GiOpenFolderProps, GiOpenFolderEvents, GiOpenFolderSlots> {
}
export {};
