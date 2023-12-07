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
export type GiFrozenOrbProps = typeof __propDef.props;
export type GiFrozenOrbEvents = typeof __propDef.events;
export type GiFrozenOrbSlots = typeof __propDef.slots;
export default class GiFrozenOrb extends SvelteComponentTyped<GiFrozenOrbProps, GiFrozenOrbEvents, GiFrozenOrbSlots> {
}
export {};
