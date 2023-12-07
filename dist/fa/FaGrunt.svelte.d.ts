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
export type FaGruntProps = typeof __propDef.props;
export type FaGruntEvents = typeof __propDef.events;
export type FaGruntSlots = typeof __propDef.slots;
export default class FaGrunt extends SvelteComponentTyped<FaGruntProps, FaGruntEvents, FaGruntSlots> {
}
export {};
