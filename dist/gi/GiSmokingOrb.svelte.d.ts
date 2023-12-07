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
export type GiSmokingOrbProps = typeof __propDef.props;
export type GiSmokingOrbEvents = typeof __propDef.events;
export type GiSmokingOrbSlots = typeof __propDef.slots;
export default class GiSmokingOrb extends SvelteComponentTyped<GiSmokingOrbProps, GiSmokingOrbEvents, GiSmokingOrbSlots> {
}
export {};
