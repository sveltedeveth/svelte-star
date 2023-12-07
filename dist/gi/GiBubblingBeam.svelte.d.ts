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
export type GiBubblingBeamProps = typeof __propDef.props;
export type GiBubblingBeamEvents = typeof __propDef.events;
export type GiBubblingBeamSlots = typeof __propDef.slots;
export default class GiBubblingBeam extends SvelteComponentTyped<GiBubblingBeamProps, GiBubblingBeamEvents, GiBubblingBeamSlots> {
}
export {};
