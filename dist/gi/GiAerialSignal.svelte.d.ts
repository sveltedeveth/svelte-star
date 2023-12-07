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
export type GiAerialSignalProps = typeof __propDef.props;
export type GiAerialSignalEvents = typeof __propDef.events;
export type GiAerialSignalSlots = typeof __propDef.slots;
export default class GiAerialSignal extends SvelteComponentTyped<GiAerialSignalProps, GiAerialSignalEvents, GiAerialSignalSlots> {
}
export {};
