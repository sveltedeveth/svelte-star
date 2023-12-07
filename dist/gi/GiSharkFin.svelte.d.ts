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
export type GiSharkFinProps = typeof __propDef.props;
export type GiSharkFinEvents = typeof __propDef.events;
export type GiSharkFinSlots = typeof __propDef.slots;
export default class GiSharkFin extends SvelteComponentTyped<GiSharkFinProps, GiSharkFinEvents, GiSharkFinSlots> {
}
export {};
