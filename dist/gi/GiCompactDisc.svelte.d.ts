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
export type GiCompactDiscProps = typeof __propDef.props;
export type GiCompactDiscEvents = typeof __propDef.events;
export type GiCompactDiscSlots = typeof __propDef.slots;
export default class GiCompactDisc extends SvelteComponentTyped<GiCompactDiscProps, GiCompactDiscEvents, GiCompactDiscSlots> {
}
export {};
