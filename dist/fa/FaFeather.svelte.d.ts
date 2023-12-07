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
export type FaFeatherProps = typeof __propDef.props;
export type FaFeatherEvents = typeof __propDef.events;
export type FaFeatherSlots = typeof __propDef.slots;
export default class FaFeather extends SvelteComponentTyped<FaFeatherProps, FaFeatherEvents, FaFeatherSlots> {
}
export {};
