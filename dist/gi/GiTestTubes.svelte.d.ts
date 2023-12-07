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
export type GiTestTubesProps = typeof __propDef.props;
export type GiTestTubesEvents = typeof __propDef.events;
export type GiTestTubesSlots = typeof __propDef.slots;
export default class GiTestTubes extends SvelteComponentTyped<GiTestTubesProps, GiTestTubesEvents, GiTestTubesSlots> {
}
export {};
