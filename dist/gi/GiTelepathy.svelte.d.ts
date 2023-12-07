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
export type GiTelepathyProps = typeof __propDef.props;
export type GiTelepathyEvents = typeof __propDef.events;
export type GiTelepathySlots = typeof __propDef.slots;
export default class GiTelepathy extends SvelteComponentTyped<GiTelepathyProps, GiTelepathyEvents, GiTelepathySlots> {
}
export {};
