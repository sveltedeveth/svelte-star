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
export type IoMdCubeProps = typeof __propDef.props;
export type IoMdCubeEvents = typeof __propDef.events;
export type IoMdCubeSlots = typeof __propDef.slots;
export default class IoMdCube extends SvelteComponentTyped<IoMdCubeProps, IoMdCubeEvents, IoMdCubeSlots> {
}
export {};
