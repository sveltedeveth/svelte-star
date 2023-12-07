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
export type GiWildfiresProps = typeof __propDef.props;
export type GiWildfiresEvents = typeof __propDef.events;
export type GiWildfiresSlots = typeof __propDef.slots;
export default class GiWildfires extends SvelteComponentTyped<GiWildfiresProps, GiWildfiresEvents, GiWildfiresSlots> {
}
export {};
