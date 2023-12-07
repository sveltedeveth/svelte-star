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
export type GiLaserburnProps = typeof __propDef.props;
export type GiLaserburnEvents = typeof __propDef.events;
export type GiLaserburnSlots = typeof __propDef.slots;
export default class GiLaserburn extends SvelteComponentTyped<GiLaserburnProps, GiLaserburnEvents, GiLaserburnSlots> {
}
export {};
