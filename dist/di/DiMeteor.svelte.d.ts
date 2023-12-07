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
export type DiMeteorProps = typeof __propDef.props;
export type DiMeteorEvents = typeof __propDef.events;
export type DiMeteorSlots = typeof __propDef.slots;
export default class DiMeteor extends SvelteComponentTyped<DiMeteorProps, DiMeteorEvents, DiMeteorSlots> {
}
export {};
