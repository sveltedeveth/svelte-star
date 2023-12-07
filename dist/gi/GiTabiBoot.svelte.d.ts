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
export type GiTabiBootProps = typeof __propDef.props;
export type GiTabiBootEvents = typeof __propDef.events;
export type GiTabiBootSlots = typeof __propDef.slots;
export default class GiTabiBoot extends SvelteComponentTyped<GiTabiBootProps, GiTabiBootEvents, GiTabiBootSlots> {
}
export {};
