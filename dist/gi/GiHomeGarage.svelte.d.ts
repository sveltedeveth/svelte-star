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
export type GiHomeGarageProps = typeof __propDef.props;
export type GiHomeGarageEvents = typeof __propDef.events;
export type GiHomeGarageSlots = typeof __propDef.slots;
export default class GiHomeGarage extends SvelteComponentTyped<GiHomeGarageProps, GiHomeGarageEvents, GiHomeGarageSlots> {
}
export {};
