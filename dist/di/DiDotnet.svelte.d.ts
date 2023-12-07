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
export type DiDotnetProps = typeof __propDef.props;
export type DiDotnetEvents = typeof __propDef.events;
export type DiDotnetSlots = typeof __propDef.slots;
export default class DiDotnet extends SvelteComponentTyped<DiDotnetProps, DiDotnetEvents, DiDotnetSlots> {
}
export {};
