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
export type FaLandmarkProps = typeof __propDef.props;
export type FaLandmarkEvents = typeof __propDef.events;
export type FaLandmarkSlots = typeof __propDef.slots;
export default class FaLandmark extends SvelteComponentTyped<FaLandmarkProps, FaLandmarkEvents, FaLandmarkSlots> {
}
export {};
