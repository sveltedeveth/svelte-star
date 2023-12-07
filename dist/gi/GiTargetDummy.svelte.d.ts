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
export type GiTargetDummyProps = typeof __propDef.props;
export type GiTargetDummyEvents = typeof __propDef.events;
export type GiTargetDummySlots = typeof __propDef.slots;
export default class GiTargetDummy extends SvelteComponentTyped<GiTargetDummyProps, GiTargetDummyEvents, GiTargetDummySlots> {
}
export {};
