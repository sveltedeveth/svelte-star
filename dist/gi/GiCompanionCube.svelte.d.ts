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
export type GiCompanionCubeProps = typeof __propDef.props;
export type GiCompanionCubeEvents = typeof __propDef.events;
export type GiCompanionCubeSlots = typeof __propDef.slots;
export default class GiCompanionCube extends SvelteComponentTyped<GiCompanionCubeProps, GiCompanionCubeEvents, GiCompanionCubeSlots> {
}
export {};
