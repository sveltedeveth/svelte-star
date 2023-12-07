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
export type GiSkiBootProps = typeof __propDef.props;
export type GiSkiBootEvents = typeof __propDef.events;
export type GiSkiBootSlots = typeof __propDef.slots;
export default class GiSkiBoot extends SvelteComponentTyped<GiSkiBootProps, GiSkiBootEvents, GiSkiBootSlots> {
}
export {};
