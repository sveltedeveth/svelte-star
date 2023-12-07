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
export type FaBitbucketProps = typeof __propDef.props;
export type FaBitbucketEvents = typeof __propDef.events;
export type FaBitbucketSlots = typeof __propDef.slots;
export default class FaBitbucket extends SvelteComponentTyped<FaBitbucketProps, FaBitbucketEvents, FaBitbucketSlots> {
}
export {};
