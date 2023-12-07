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
export type MdGetAppProps = typeof __propDef.props;
export type MdGetAppEvents = typeof __propDef.events;
export type MdGetAppSlots = typeof __propDef.slots;
export default class MdGetApp extends SvelteComponentTyped<MdGetAppProps, MdGetAppEvents, MdGetAppSlots> {
}
export {};
