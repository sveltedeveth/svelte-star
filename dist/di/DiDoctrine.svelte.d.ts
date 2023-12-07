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
export type DiDoctrineProps = typeof __propDef.props;
export type DiDoctrineEvents = typeof __propDef.events;
export type DiDoctrineSlots = typeof __propDef.slots;
export default class DiDoctrine extends SvelteComponentTyped<DiDoctrineProps, DiDoctrineEvents, DiDoctrineSlots> {
}
export {};
