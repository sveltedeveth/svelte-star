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
export type MdMmsProps = typeof __propDef.props;
export type MdMmsEvents = typeof __propDef.events;
export type MdMmsSlots = typeof __propDef.slots;
export default class MdMms extends SvelteComponentTyped<MdMmsProps, MdMmsEvents, MdMmsSlots> {
}
export {};
