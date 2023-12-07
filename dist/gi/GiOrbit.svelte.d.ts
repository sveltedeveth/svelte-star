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
export type GiOrbitProps = typeof __propDef.props;
export type GiOrbitEvents = typeof __propDef.events;
export type GiOrbitSlots = typeof __propDef.slots;
export default class GiOrbit extends SvelteComponentTyped<GiOrbitProps, GiOrbitEvents, GiOrbitSlots> {
}
export {};
