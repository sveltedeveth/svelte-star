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
export type FaBookReaderProps = typeof __propDef.props;
export type FaBookReaderEvents = typeof __propDef.events;
export type FaBookReaderSlots = typeof __propDef.slots;
export default class FaBookReader extends SvelteComponentTyped<FaBookReaderProps, FaBookReaderEvents, FaBookReaderSlots> {
}
export {};
