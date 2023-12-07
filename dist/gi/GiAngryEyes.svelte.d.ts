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
export type GiAngryEyesProps = typeof __propDef.props;
export type GiAngryEyesEvents = typeof __propDef.events;
export type GiAngryEyesSlots = typeof __propDef.slots;
export default class GiAngryEyes extends SvelteComponentTyped<GiAngryEyesProps, GiAngryEyesEvents, GiAngryEyesSlots> {
}
export {};
