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
export type GiBottleVaporsProps = typeof __propDef.props;
export type GiBottleVaporsEvents = typeof __propDef.events;
export type GiBottleVaporsSlots = typeof __propDef.slots;
export default class GiBottleVapors extends SvelteComponentTyped<GiBottleVaporsProps, GiBottleVaporsEvents, GiBottleVaporsSlots> {
}
export {};
