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
export type DiGruntProps = typeof __propDef.props;
export type DiGruntEvents = typeof __propDef.events;
export type DiGruntSlots = typeof __propDef.slots;
export default class DiGrunt extends SvelteComponentTyped<DiGruntProps, DiGruntEvents, DiGruntSlots> {
}
export {};
