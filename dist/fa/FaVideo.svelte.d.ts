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
export type FaVideoProps = typeof __propDef.props;
export type FaVideoEvents = typeof __propDef.events;
export type FaVideoSlots = typeof __propDef.slots;
export default class FaVideo extends SvelteComponentTyped<FaVideoProps, FaVideoEvents, FaVideoSlots> {
}
export {};
