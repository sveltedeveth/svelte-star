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
export type GiSpikedCollarProps = typeof __propDef.props;
export type GiSpikedCollarEvents = typeof __propDef.events;
export type GiSpikedCollarSlots = typeof __propDef.slots;
export default class GiSpikedCollar extends SvelteComponentTyped<GiSpikedCollarProps, GiSpikedCollarEvents, GiSpikedCollarSlots> {
}
export {};
