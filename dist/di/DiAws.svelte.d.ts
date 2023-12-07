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
export type DiAwsProps = typeof __propDef.props;
export type DiAwsEvents = typeof __propDef.events;
export type DiAwsSlots = typeof __propDef.slots;
export default class DiAws extends SvelteComponentTyped<DiAwsProps, DiAwsEvents, DiAwsSlots> {
}
export {};
