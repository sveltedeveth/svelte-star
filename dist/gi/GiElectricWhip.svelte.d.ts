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
export type GiElectricWhipProps = typeof __propDef.props;
export type GiElectricWhipEvents = typeof __propDef.events;
export type GiElectricWhipSlots = typeof __propDef.slots;
export default class GiElectricWhip extends SvelteComponentTyped<GiElectricWhipProps, GiElectricWhipEvents, GiElectricWhipSlots> {
}
export {};
