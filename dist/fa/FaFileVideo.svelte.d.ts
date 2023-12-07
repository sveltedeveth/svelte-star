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
export type FaFileVideoProps = typeof __propDef.props;
export type FaFileVideoEvents = typeof __propDef.events;
export type FaFileVideoSlots = typeof __propDef.slots;
export default class FaFileVideo extends SvelteComponentTyped<FaFileVideoProps, FaFileVideoEvents, FaFileVideoSlots> {
}
export {};
