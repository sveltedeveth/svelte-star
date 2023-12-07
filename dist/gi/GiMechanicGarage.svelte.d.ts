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
export type GiMechanicGarageProps = typeof __propDef.props;
export type GiMechanicGarageEvents = typeof __propDef.events;
export type GiMechanicGarageSlots = typeof __propDef.slots;
export default class GiMechanicGarage extends SvelteComponentTyped<GiMechanicGarageProps, GiMechanicGarageEvents, GiMechanicGarageSlots> {
}
export {};
