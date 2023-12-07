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
export type GiMetalPlateProps = typeof __propDef.props;
export type GiMetalPlateEvents = typeof __propDef.events;
export type GiMetalPlateSlots = typeof __propDef.slots;
export default class GiMetalPlate extends SvelteComponentTyped<GiMetalPlateProps, GiMetalPlateEvents, GiMetalPlateSlots> {
}
export {};
