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
export type GiElectricProps = typeof __propDef.props;
export type GiElectricEvents = typeof __propDef.events;
export type GiElectricSlots = typeof __propDef.slots;
export default class GiElectric extends SvelteComponentTyped<GiElectricProps, GiElectricEvents, GiElectricSlots> {
}
export {};
