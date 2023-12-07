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
export type IoMdPersonProps = typeof __propDef.props;
export type IoMdPersonEvents = typeof __propDef.events;
export type IoMdPersonSlots = typeof __propDef.slots;
export default class IoMdPerson extends SvelteComponentTyped<IoMdPersonProps, IoMdPersonEvents, IoMdPersonSlots> {
}
export {};
