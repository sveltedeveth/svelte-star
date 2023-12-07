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
export type MdInfoProps = typeof __propDef.props;
export type MdInfoEvents = typeof __propDef.events;
export type MdInfoSlots = typeof __propDef.slots;
export default class MdInfo extends SvelteComponentTyped<MdInfoProps, MdInfoEvents, MdInfoSlots> {
}
export {};
