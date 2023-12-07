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
export type FaAwsProps = typeof __propDef.props;
export type FaAwsEvents = typeof __propDef.events;
export type FaAwsSlots = typeof __propDef.slots;
export default class FaAws extends SvelteComponentTyped<FaAwsProps, FaAwsEvents, FaAwsSlots> {
}
export {};
