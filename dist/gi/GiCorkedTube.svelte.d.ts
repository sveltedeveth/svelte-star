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
export type GiCorkedTubeProps = typeof __propDef.props;
export type GiCorkedTubeEvents = typeof __propDef.events;
export type GiCorkedTubeSlots = typeof __propDef.slots;
export default class GiCorkedTube extends SvelteComponentTyped<GiCorkedTubeProps, GiCorkedTubeEvents, GiCorkedTubeSlots> {
}
export {};
