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
export type MdSubwayProps = typeof __propDef.props;
export type MdSubwayEvents = typeof __propDef.events;
export type MdSubwaySlots = typeof __propDef.slots;
export default class MdSubway extends SvelteComponentTyped<MdSubwayProps, MdSubwayEvents, MdSubwaySlots> {
}
export {};
