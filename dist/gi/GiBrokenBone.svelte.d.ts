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
export type GiBrokenBoneProps = typeof __propDef.props;
export type GiBrokenBoneEvents = typeof __propDef.events;
export type GiBrokenBoneSlots = typeof __propDef.slots;
export default class GiBrokenBone extends SvelteComponentTyped<GiBrokenBoneProps, GiBrokenBoneEvents, GiBrokenBoneSlots> {
}
export {};
