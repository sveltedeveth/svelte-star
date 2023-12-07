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
export type DiBitbucketProps = typeof __propDef.props;
export type DiBitbucketEvents = typeof __propDef.events;
export type DiBitbucketSlots = typeof __propDef.slots;
export default class DiBitbucket extends SvelteComponentTyped<DiBitbucketProps, DiBitbucketEvents, DiBitbucketSlots> {
}
export {};
